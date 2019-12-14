import ShipmentSearchIndex, { randomDelay } from './shipmentSearchIndex';

interface ShipmentUpdateListenerInterface {
    receiveUpdate(id: string, shipmentData: any) ;
  }
  
 export default  class ShipmentUpdateListener extends ShipmentSearchIndex implements ShipmentUpdateListenerInterface {
  lock: {[key: string]: boolean} = {};  
  
  async  receiveUpdate(id: string, shipmentData: any) {
      console.log("receiveUpdate   id  :"+id,"shipmentData   :  ",shipmentData);
      (async() => {
        try {
          while(this.lock[id]) await randomDelay();
          this.lock[id] = true;
          await this.updateShipment(id, shipmentData);
        } finally {
          delete(this.lock[id]);
        }
      })();




    }
  }
 
 
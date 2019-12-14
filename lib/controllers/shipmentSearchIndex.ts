async function sleep(ms: number) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(), ms)
    })
  }
  
  export async  function randomDelay() {
    const randomTime = Math.round(Math.random() * 1000)
    return sleep(randomTime)
  }
  
  export default class ShipmentSearchIndex {
    async updateShipment(id: string, shipmentData: any) {
      console.log("updateShipment   id  :"+id,"shipmentData   :  ",shipmentData);
      const startTime = new Date()
      await randomDelay()
      const endTime = new Date()
      console.log(`update ${id}@${
          startTime.toISOString()
        } finished@${
          endTime.toISOString()
        }`
      )
      
      return {startTime, endTime}
    }
  }
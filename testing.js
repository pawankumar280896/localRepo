// function main(){
//     //Create your constructor funtion with the name Shipment
//     function Shipment(id,location,destination,status,resources){
//         this.id=id;
//         this.location=location;
//         this.destination=destination;
//         this.status =status;
//         this.resources =resources; 
//     } 
//     //Add the updateStatusAndResources using the object prototype
//      Shipment.prototype.updateStatusandResources=function(newstatus,newResources){
//          this.status=newstatus;
//          this.resources=newResources;
//      } 
//     //Add the assignResource methods through Object prototype
//      Shipment.prototype.assignResources = function (...newResources){
//          this.resources.push(...newResources);
//     }
//     //Create the object literal with tthe name TrackingSystem
//         const TrackingSystem ={
//             shipments:[],
//             updateStatus(id,status){
//            const shipment = this.shipments.find(ship => ship.id === id);
//             if (shipment) {
//                 shipment.status = status;
//             }
//         },
        
//         viewShipment (id){
//             const shipment = this.shipments.find(ship => ship.id === id);
//             if (shipment) {
//                 const { id, status, resources, location, destination } = shipment;
//                 console.log(`Shipment ID: ${id}`);
//                 console.log(`Status: ${status}`);
//                 console.log(`Resources: ${resources.join(', ')}`);
//                 console.log(`Location: ${location}`);
//                 console.log(`Destination: ${destination}`);
//             } else {
//                 console.log(`Shipment with ID ${id} not found.`);
//             }
//         }
        
//     };
//     return {Shipment,TrackingSystem};
//     //do not modify any other code.
//     }
    



// function shuffle(arr){
// for(let i=arr.length-1;i>=0;i--)
//     {
//         let j=Math.floor(Math.random()*i+1);
// [arr[i],arr[j]]=[arr[j],arr[i]];
// }
// console.log(arr);
// }
// const arr=[1,2,3,4,5];
// shuffle(arr);

const currentTime = new Date();

//const startTime = new Date();



   
 
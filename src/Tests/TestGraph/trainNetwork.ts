import Graph from "../../DataStructures/Graph/Graph";

const trainNetwork = new Graph(true, true);

const losAngeles = trainNetwork.addVertex("Los Angeles");
const sanFrancisco = trainNetwork.addVertex("San Francisco");
const newYork = trainNetwork.addVertex("New York");
const atlanta = trainNetwork.addVertex("Atlanta");
const denver = trainNetwork.addVertex("Denver");
const calgary = trainNetwork.addVertex("Calgary");

trainNetwork.addEdge(sanFrancisco, losAngeles, 400);
trainNetwork.addEdge(losAngeles, sanFrancisco, 400);
trainNetwork.addEdge(newYork, denver, 1800);
trainNetwork.addEdge(denver, newYork, 1800);
trainNetwork.addEdge(calgary, denver, 1000);
trainNetwork.addEdge(denver, calgary, 1000);
trainNetwork.addEdge(losAngeles, atlanta, 2100);
trainNetwork.addEdge(atlanta, losAngeles, 2100);

console.log("Current Routes: \n");
trainNetwork.print();

console.log("\nSnowstorm hits Calgary and New York! Calgary, New York and Denver affected. See updated routes: \n")
trainNetwork.removeEdge(newYork, denver);
trainNetwork.removeEdge(denver, calgary);
trainNetwork.removeEdge(calgary, denver);
trainNetwork.removeVertex(calgary);

trainNetwork.print();

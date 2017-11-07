const { Layer, Network } = window.synaptic;
const results1 = document.getElementById('test-results-1');
const results2 = document.getElementById('test-results-2');
const results3 = document.getElementById('test-results-3');
const results4 = document.getElementById('test-results-4');

const inputLayer = new Layer(2);
const hiddenLayer = new Layer(3);
const outputLayer = new Layer(1);

inputLayer.project(hiddenLayer);
hiddenLayer.project(outputLayer);

const myNetwork = new Network({
  input: inputLayer,
  hidden: [hiddenLayer],
  output: outputLayer,
});

// train the network - learn XOR
const learningRate = 0.3;
for (let i = 0; i < 20000; i++) {
  // 0,0 => 0
  myNetwork.activate([0, 0]);
  myNetwork.propagate(learningRate, [0]);

  // 0,1 => 1
  myNetwork.activate([0, 1]);
  myNetwork.propagate(learningRate, [1]);

  // 1,0 => 1
  myNetwork.activate([1, 0]);
  myNetwork.propagate(learningRate, [1]);

  // 1,1 => 0
  myNetwork.activate([1, 1]);
  myNetwork.propagate(learningRate, [0]);
}

results1.innerText = `1: ${myNetwork.activate([0, 0])}`;
results2.innerText = `2: ${myNetwork.activate([0, 1])}`;
results3.innerText = `3: ${myNetwork.activate([1, 0])}`;
results4.innerText = `4: ${myNetwork.activate([1, 1])}`;

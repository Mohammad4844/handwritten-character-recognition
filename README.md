# Handwritten Character Recognition
This is a machine learning model that predicts hand written (uppercase) letters with ~ 98% accuracy. It uses a sequential, dense layered, neural network model trained in TensorFlow with the NIST dataset.

## Live Version
A UI to interface with the model is hosted on AWS [here](http://hcr-d0dc8b0e6bc33f70.elb.us-east-1.amazonaws.com/).

## Technologies used:
- TensorFlow & Scikit Learn for the Machine Learning model
- Ruby on Rails for the server & interconnectivity
- [Bootstrap](https://getbootstrap.com) & Vanilla JS for the User Interface
- AWS EC2 & Load Balancer to host

## Data & Model Training
The model was trained using data from [this](https://www.kaggle.com/datasets/sachinpatel21/az-handwritten-alphabets-in-csv-format) kaggle dataset, which originally takes from the [NIST](https://www.nist.gov/srd/nist-special-database-19) and MNIST datasets (which are large repositories of hand written letters, numbers text etc). The dataset contains information of ~ 370,000 images (28x28 pixels).
<br><br>
A sequential neural network was used to train the model. The model accuately predicted ~ 98% of the letters on the test set (unseen data). 
[Here's](recognizer_ml_model/Handwritten%20Character%20Recognition%20Training%20Notebook.ipynb) the jupyter notebook that contains all the details and code to build and train the model.

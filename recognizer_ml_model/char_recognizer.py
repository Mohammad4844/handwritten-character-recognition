import sys
import json
import numpy as np
import tensorflow as tf

# load structure, weights & biases of trained model
model = tf.keras.models.load_model('my_model')

# convert program argument into an numpy array
x = np.array([json.loads(sys.argv[1])])

# print out the result
ans = np.argmax(tf.nn.softmax(model.predict(x)))
print(chr(ans + 65))
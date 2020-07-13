---
path: "/face-recoginition"
date: "2020-06-08"
title: "Face recognition and identification, A closer look at python face-recoginition library"
author: "Aarif Malik"
desc: "A simple explanation of how facial recoginition works and how to built one using python."
category: "Machine Learning"
featured: "./images/face.jpg"
---

## Description

## Combining neurons(Architecture of neural network)

A neural network is a semantic network, where a set of input/output units (“neurons”) are connected to each other, and these connections are weighted relative to the importance or strength of the link between one neuron and the next. Such networks are called **feedforward neural networks**.<br></br>
![Neural Network](./images/nn6.png)
Let's extend above neural network to classify species of iris flowers. we will use sklearn to load iris dataset, the dataset looks like

| sepal length (cm) | sepal width (cm) | petal length (cm) | petal width (cm) |
| ----------------- | ---------------- | ----------------- | ---------------- |
| 5.1               | 3.5              | 1.4               | 0.2              |
| 4.9               | 3.0              | 1.4               | 0.2              |
| 4.7               | 3.2              | 1.3               | 0.2              |
| 4.6               | 3.1              | 1.5               | 0.2              |
| 5.0               | 0.6              | 0.4               | 0.2              |

The target names are **_'setosa', 'versicolor', 'virginica'_**. The above netowrk will classify the flower species into three possible species

> $$ 0\quad \rightarrow \quad setosa\\ \quad \ 1\quad \rightarrow \quad versicolor\\ \quad 2\quad \rightarrow \quad virginica$$

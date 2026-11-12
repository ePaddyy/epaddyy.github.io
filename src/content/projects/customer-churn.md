---
title: Customer Churn Prediction
summary: An end-to-end machine learning project that predicts telecommunications customer churn using Logistic Regression. The project combines customer data preprocessing, feature encoding, model evaluation and a Flask REST API packaged with Docker.
category: ml
icon: users
order: 2
featured: true
showOnHome: true
metric:
  name: ROC-AUC
  value: '0.858'
  note: Held-out 20% test set
tags: [Python, scikit-learn, Pandas, Logistic Regression, Flask, Docker]
repo: https://github.com/ePaddyy/customer-churn-prediction
approach: Cleaned and transformed 7,043 telecommunications customer records, handled missing values, normalised categorical variables and converted customer attributes into numerical features using DictVectorizer. Trained a Logistic Regression classifier, evaluated it using five-fold cross-validation and a held-out test set, then serialized the model and vectorizer for Flask API inference.
impact: Demonstrates how customer data and predictive modelling can help telecommunications businesses identify customers at risk of leaving and support data-driven customer retention strategies.
caseStudy:
  headline: Predicting telecommunications customer churn
  facts:
    - { label: Role, value: 'Solo: data preparation, modelling and API development' }
    - { label: Model, value: Logistic Regression (C=1) }
    - { label: Data, value: '7,043 telecommunications customer records' }
    - { label: Stack, value: 'Python, Pandas, scikit-learn, DictVectorizer, Flask, Docker, Pipenv' }
  results:
    - { value: '0.858', label: Held-out test ROC-AUC }
    - { value: '19', label: Input features }
---
A machine learning application that predicts customer churn and exposes probability-based predictions through a REST API. The project takes the workflow beyond notebook experimentation by packaging the trained model for deployment.

## The problem

Customer churn is an important business challenge for telecommunications providers. Losing existing customers can affect revenue and increase the cost of acquiring replacements.

The objective was to build a classification model that estimates whether a customer is likely to discontinue their subscription based on their demographic information, account characteristics and subscribed services.

## Data

The project uses a telecommunications customer churn dataset containing 7,043 customer records.

The dataset includes:

- **Demographic information:** Gender, senior citizen status, partner and dependents.
- **Account information:** Tenure, monthly charges and total charges.
- **Subscribed services:** Internet service, phone service, online security, technical support, streaming services and other subscription attributes.
- **Target variable:** Churn, indicating whether a customer discontinued their service.

Customer IDs were excluded from the model because they do not provide meaningful predictive information.

## Data preparation and feature engineering

Before training, I prepared the dataset for machine learning:

- Normalised column names and categorical values to maintain consistent feature representations.
- Converted total charges into numerical values and handled missing entries.
- Transformed categorical and numerical customer attributes into a dictionary-based representation.
- Used `DictVectorizer` to convert customer records into a numerical feature matrix suitable for Logistic Regression.

## Modelling

I trained a Logistic Regression classifier using scikit-learn.

The regularisation parameter was set to `C=1`. Model development involved an 80/20 training-validation and test arrangement, with five-fold cross-validation on the training portion.

I used ROC-AUC as the primary evaluation metric because it measures how well the model distinguishes between customers who churn and those who remain.

## Results

The model achieved:

- **Cross-validation ROC-AUC:** Approximately 0.842 ± 0.007.
- **Held-out test ROC-AUC:** 0.858.

These results indicate that the model can distinguish between churned and retained customers reasonably well on the evaluated dataset.

## Model deployment

To make the model usable outside the training notebook, I built a Flask REST API.

The deployment workflow includes:

- Serialising the trained Logistic Regression model and DictVectorizer using Python pickle.
- Creating a `POST /predict` endpoint that accepts customer information in JSON format.
- Returning a churn probability and a binary churn classification.
- Packaging the application using Docker.
- Configuring Gunicorn to serve the Flask application.

The prediction API uses the same trained model artifact, avoiding the need to retrain the model whenever a prediction is requested.

## Limitations & what I'd do next

The current project provides a functional prediction pipeline, but there are opportunities to improve it:

- Compare Logistic Regression against Random Forest, XGBoost and other classification algorithms.
- Investigate class imbalance and its effect on churn detection.
- Introduce SHAP or other explainability techniques to understand individual predictions.
- Add more comprehensive automated API tests.
- Explore model monitoring and prediction performance over time.

The project is intended as a demonstration of machine learning model development and deployment, rather than a complete customer retention platform.


---
title: Electric Car Purchase Prediction
summary: An end-to-end machine learning project that predicts customer willingness to purchase electric vehicles using demographic, financial, lifestyle and charging-infrastructure data. It explores multiple classification algorithms, selects LightGBM for deployment and integrates the model into a Flask REST API.
category: ml
icon: car
order: 1
featured: true
showOnHome: true
metric:
  name: ROC-AUC
  value: '0.9344'
  note: Validation ROC-AUC
tags: [Python, LightGBM, scikit-learn, Pandas, Flask, Joblib, pytest, Docker, Render]
repo: https://github.com/ePaddyy/electric-car-purchase-prediction
approach: Performed exploratory data analysis, data cleaning and feature engineering on customer demographic, financial and lifestyle attributes. Compared Logistic Regression, Decision Tree, Random Forest, Extra Trees, XGBoost, LightGBM and CatBoost using ROC-AUC. Selected LightGBM, configured a classification threshold of 0.27 and serialized the model using Joblib. Developed a Flask REST API with input validation, automated testing and Docker containerisation, then deployed the application to Render.
impact: Demonstrates how machine learning can be used to understand electric vehicle adoption patterns and estimate purchase likelihood while providing a deployable prediction service.
caseStudy:
  headline: Predicting customer electric vehicle purchasing behaviour
  facts:
    - { label: Role, value: 'Solo: data analysis, feature engineering, modelling and API development' }
    - { label: Model, value: LightGBM Classifier }
    - { label: Data, value: Customer demographic, financial, commuting and charging-infrastructure attributes }
    - { label: Stack, value: 'Python, Pandas, scikit-learn, LightGBM, Flask, Joblib, pytest, Docker, Render' }
  results:
    - { value: '0.9344', label: LightGBM validation ROC-AUC }
    - { value: '13', label: Input features }
---
An end-to-end machine learning application that estimates whether a customer is likely to purchase an electric vehicle. Beyond model development, the project focuses on building a reusable prediction service with input validation, automated testing, containerisation and cloud deployment.

## The problem

The transition towards electric vehicles presents an opportunity to understand the factors influencing customer adoption.

However, purchasing decisions can depend on several considerations, including income, commuting patterns, charging infrastructure, environmental concerns and the availability of government subsidies.

The objective was to develop a machine learning model that estimates the likelihood of an individual purchasing an electric vehicle based on these characteristics.

## Data

The project uses an electric vehicle purchase dataset containing demographic, financial, lifestyle and infrastructure-related attributes.

The model uses 13 input features:

- **Demographic:** Age and gender.
- **Financial:** Annual income.
- **Lifestyle:** Daily commuting distance and number of cars owned.
- **Charging infrastructure:** Charging stations near home and work, and home charging availability.
- **Purchase considerations:** Environmental concern, subsidy availability and range anxiety.
- **Geographical and vehicle information:** City type and current car type.

The target variable is `will_buy_ev`, indicating whether a customer is expected to purchase an electric vehicle.

## Exploratory data analysis and feature engineering

I performed exploratory data analysis to understand the dataset, identify relationships between variables and investigate patterns associated with EV purchasing behaviour.

The analysis included:

- Numerical and categorical feature exploration.
- Target distribution analysis.
- Missing-value and data-quality checks.
- Correlation and feature relationship analysis.
- Mutual information analysis.
- Visualisation of important feature distributions and patterns.

The analysis highlighted environmental concern, annual income and subsidy availability as useful features for understanding EV purchase patterns.

These are observational relationships and do not establish causation.

## Modelling

I experimented with several classification algorithms to identify a suitable model for predicting EV purchase likelihood.

The models included:

- Logistic Regression
- Decision Tree
- Random Forest
- Extra Trees
- XGBoost
- LightGBM
- CatBoost

ROC-AUC was used as the primary evaluation metric to compare the models.

### Model comparison

| Model               | Validation ROC-AUC |
| ------------------- | -----------------: |
| XGBoost             |           0.934415 |
| LightGBM            |           0.934368 |
| CatBoost            |           0.933152 |
| Logistic Regression |           0.932669 |
| Random Forest       |           0.929537 |
| Extra Trees         |           0.928865 |
| Decision Tree       |           0.912376 |

Although XGBoost achieved a slightly higher validation ROC-AUC, I selected LightGBM for the final application.

The selected LightGBM configuration used:

- `n_estimators`: 200
- `max_depth`: 3
- `num_leaves`: 15
- `learning_rate`: 0.05
- `random_state`: 42
- Classification threshold: 0.27

## Results

The LightGBM model achieved a validation ROC-AUC of approximately **0.9344**.

The training script also reported the following evaluation metrics:

| Metric    | Result |
| --------- | -----: |
| ROC-AUC   | 0.9395 |
| Precision | 0.6003 |
| Recall    | 0.8529 |
| F1-score  | 0.7046 |

The two sets of results come from different evaluation procedures and should not be treated as directly interchangeable.

## Model deployment

One of the main objectives was to move beyond notebook-based predictions and make the trained model accessible through an API.

I developed a Flask REST API that loads the serialized LightGBM model and provides endpoints for:

- `GET /ping` — checks whether the API is running.
- `GET /about` — provides information about the model.
- `POST /predict` — accepts customer information and generates an EV purchase prediction.

The prediction endpoint includes input validation to check:

- Missing and unexpected fields.
- Numerical data types.
- Valid categorical values.
- Numerical business rules and permitted ranges.
- JSON request structure.

The model and prediction configuration are serialized using Joblib.

## Testing and containerisation

To ensure the application works beyond the training environment, I incorporated automated testing and Docker.

The project includes:

- Pytest-based API tests.
- Prediction testing using sample customer records.
- Testing against the deployed online API.
- Docker containerisation using a Python 3.11 base image.
- Gunicorn for serving the Flask application.

## Cloud deployment

The application was deployed to Render, making the prediction API accessible online.

This provides an opportunity to test the complete workflow, from submitting customer information to receiving a model-generated prediction through an HTTP request.

## Limitations & what I'd do next

Some areas I would explore further include:

- Model calibration to improve the interpretation of predicted probabilities.
- Additional feature selection and feature engineering experiments.
- SHAP-based explanations for individual customer predictions.
- Monitoring prediction behaviour and model performance over time.
- Expanding the API to support batch predictions.
- Building an interactive frontend for users who prefer not to interact directly with API endpoints.

The project demonstrates the complete machine learning workflow, from exploratory analysis and model selection to API development, automated testing, containerisation and cloud deployment.

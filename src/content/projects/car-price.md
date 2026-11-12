---
title: Car Price Predictor
summary: An end-to-end machine learning application that estimates vehicle MSRP from specifications such as manufacturer, model, engine performance, fuel economy and vehicle characteristics. It uses Ridge Regression with NumPy and a Streamlit interface for interactive predictions.
category: ml
icon: car
order: 5
featured: true
showOnHome: true
metric:
  name: R²
  value: '0.82'
  note: Held-out test set; log-price scale
tags: [Python, NumPy, Pandas, Ridge Regression, Streamlit, pytest]
repo: https://github.com/ePaddyy/car-price-predictor
approach: Performed exploratory data analysis and feature engineering on vehicle specifications. Applied a logarithmic transformation to MSRP, implemented Ridge Regression using NumPy's closed-form solution, and tuned regularisation using a validation set. Separated model training, inference and presentation into independent modules, saved model parameters and categorical options as JSON, and built a Streamlit application with automated prediction tests.
impact: Provides an interactive way to estimate vehicle prices from their specifications while demonstrating mathematical implementation of regularised regression, model persistence, modular application design and deployment.
caseStudy:
  headline: Building an interactive car price prediction application
  facts:
    - { label: Role, value: 'Solo: data analysis, feature engineering, modelling and application development' }
    - { label: Model, value: Ridge Regression implemented with NumPy }
    - { label: Data, value: Approximately 11,900 vehicle records from Kaggle }
    - { label: Stack, value: 'Python, NumPy, Pandas, Streamlit, JSON, pytest' }
  results:
    - { value: '0.82', label: Held-out test R² on log-price scale }
    - { value: '0.460', label: Test RMSE on log-price scale }
---
A machine learning web application that estimates the Manufacturer's Suggested Retail Price (MSRP) of a vehicle based on its specifications.

Originally developed while following the regression module of the Machine Learning Zoomcamp, this project evolved from a notebook-based experiment into a standalone application with separate training, prediction and presentation components.

## The problem

Estimating a vehicle's market price involves several characteristics, including its manufacturer, model, engine performance, fuel economy and vehicle category.

The objective was to build a regression model that learns relationships between these vehicle specifications and their corresponding MSRP values.

Rather than stopping at model development in a notebook, I wanted to turn the trained model into an interactive application where users could enter vehicle specifications and receive price estimates.

## Data

The project uses a Kaggle car features and MSRP dataset containing approximately 11,900 vehicle records.

The dataset includes:

- **Vehicle identification:** Manufacturer, model and production year.
- **Engine specifications:** Engine horsepower and number of cylinders.
- **Fuel economy:** City and highway miles per gallon.
- **Vehicle characteristics:** Number of doors, drive type, fuel type, market category, vehicle size and body style.
- **Popularity:** Vehicle popularity information.
- **Target variable:** Manufacturer's Suggested Retail Price (MSRP).

The dataset primarily covers US vehicles from 1990–2017.

## Exploratory data analysis and feature engineering

I explored the dataset to understand the distribution of vehicle prices and identify the characteristics associated with MSRP.

A key challenge was the highly right-skewed distribution of vehicle prices. To address this, I transformed the target variable using:

`log(1 + MSRP)`

This made the target more suitable for linear regression modelling.

Additional feature engineering included:

- **Car age:** Calculated using `2017 - year`.
- **Engine characteristics:** Engine horsepower and cylinder count.
- **Fuel economy:** City and highway MPG.
- **Categorical encoding:** One-hot encoding for vehicle attributes.
- **Category handling:** Retained the five most common values for selected categorical features.

These transformations produced the numerical feature representation used by the regression model.

## Modelling

I implemented Ridge Regression using NumPy rather than relying on a pre-built scikit-learn estimator.

Ridge Regression introduces L2 regularisation to reduce the influence of excessively large coefficients and help control overfitting.

The model uses the closed-form solution:

`w = (XᵀX + rI)⁻¹ Xᵀy`

Where:

- `X` represents the feature matrix.
- `y` represents the log-transformed target.
- `r` is the regularisation parameter.
- `w` represents the learned model coefficients.

I experimented with regularisation values using the validation dataset and selected `r = 0.001`.

The dataset was divided into:

- 60% training data.
- 20% validation data.
- 20% testing data.

After selecting the regularisation parameter, the final model was refitted using the combined training and validation datasets.

## Results

The final model achieved the following results:

| Evaluation metric      | Validation |  Test |
| ---------------------- | ---------: | ----: |
| RMSE (log-price scale) |      0.461 | 0.460 |
| R² (log-price scale)  |         — |  0.82 |

The test R² of 0.82 indicates that the model explains approximately 82% of the variation in the log-transformed vehicle prices within the held-out test dataset.

However, the original-scale prediction errors are relatively large, at approximately ±45%, so the estimates should be treated as indicative rather than precise market valuations.

## Application development

One of the main objectives was to convert the trained regression model into a usable web application.

I separated the project into independent components:

- **train.py:** Handles data preparation, feature engineering, model training and model persistence.
- **predictor.py:** Loads the saved model and generates predictions for individual vehicles.
- **app.py:** Provides the interactive Streamlit interface.
- **model/model.json:** Stores the trained model coefficients, categorical mappings and application options.
- **test_predictor.py:** Contains automated tests for the prediction logic.

This separation makes the application easier to maintain and allows model training to happen independently of prediction requests.

## Model persistence and testing

Instead of saving the model using pickle or joblib, I stored the learned coefficients and required categorical information in a JSON file.

This approach has several advantages:

- The prediction application does not need to retrain the model on startup.
- The inference component can load model parameters without depending on scikit-learn.
- Model parameters and categorical mappings are stored together.
- The application avoids scikit-learn version compatibility issues.

I also implemented automated tests using pytest.

The tests include sanity checks and a comparison between predictions from the original training implementation and the standalone prediction module. This helps ensure that feature construction and prediction logic remain consistent.

## Deployment

The application is deployed using Streamlit Community Cloud.

The deployment workflow connects the GitHub repository to Streamlit, which installs the required dependencies and launches the application using `app.py`.

The live application provides:

- Vehicle manufacturer and model selection.
- Dependent Make → Model dropdowns.
- Inputs for vehicle specifications.
- Interactive price predictions.
- Estimated MSRP displayed as a result.

**Live application:** https://epaddyy-car-price-predictor-app-lzlrba.streamlit.app/

## Limitations & what I'd do next

Although the model provides a useful baseline, there are several limitations:

- The dataset primarily contains historical US vehicle information, so predictions may not reflect current market prices.
- Mileage, vehicle condition and trim-level differences are not included.
- A linear model may not capture all the complex relationships between vehicle specifications and prices.
- The model's prediction errors are relatively large, so it is not intended for precise vehicle valuation.

Future improvements include:

- Experimenting with XGBoost and LightGBM to compare nonlinear regression approaches.
- Introducing cross-validation for more robust model evaluation.
- Incorporating mileage, vehicle condition and additional vehicle specifications.
- Developing prediction intervals to communicate uncertainty.
- Adding automated CI workflows to run tests whenever the repository is updated.

The project demonstrates how a machine learning model can move from mathematical implementation and experimentation to a modular, tested and deployed web application.

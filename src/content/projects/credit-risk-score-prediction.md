---
title: CreditLens — Credit Risk Prediction
summary: An end-to-end credit risk classification system that estimates the probability of loan default using XGBoost. It combines financial data preprocessing, model evaluation, decision-threshold optimisation and SHAP explainability, with a Flask REST API for serving predictions.
category: ml
icon: gauge
order: 3
featured: true
showOnHome: true
metric:
  name: ROC-AUC
  value: '0.8332'
  note: Held-out test set
tags: [Python, XGBoost, scikit-learn, Pandas, SHAP, Flask, pytest, Docker]
repo: https://github.com/ePaddyy/credit-risk-score-prediction
approach: Cleaned and preprocessed credit applicant data, handled missing and invalid financial values, compared multiple classification algorithms and selected XGBoost. Evaluated the model using ROC-AUC and other classification metrics, selected a decision threshold using validation data, and integrated SHAP for model explainability. Serialized the trained model and developed a Flask API with automated tests and Docker containerisation.
impact: Demonstrates how predictive modelling and explainable AI can support credit risk assessment by estimating default probabilities and providing insight into the factors influencing model predictions.
caseStudy:
  headline: Building an explainable credit default prediction system
  facts:
    - label: Role
      value: 'Solo: data preparation, modelling, evaluation and API development'
    - label: Model
      value: XGBoost Classifier
    - label: Data
      value: Credit scoring dataset containing applicant demographic and financial attributes
    - label: Stack
      value: 'Python, Pandas, NumPy, scikit-learn, XGBoost, SHAP, Flask, pytest, Docker'
  results:
    - value: '0.8332'
      label: Held-out test ROC-AUC
    - value: '0.34'
      label: Selected classification threshold
---

CreditLens is a machine learning application designed to estimate the probability of credit default. It combines predictive modelling, model explainability and API development to demonstrate how a trained credit risk model can be integrated into an application.

## The problem

Credit risk assessment involves determining whether an applicant is likely to meet their financial obligations.

Traditional assessment processes can involve multiple financial and demographic indicators. The objective of this project was to develop a machine learning model that uses applicant information to estimate the likelihood of default.

Rather than producing only a binary decision, the system returns a default probability, allowing the classification threshold to be adjusted according to the intended evaluation criteria.

## Data

The project uses a credit scoring dataset containing applicant demographic, employment and financial information.

The features include:

- **Personal information:** Age, marital status and employment-related attributes.
- **Financial information:** Income, expenses, assets, debt and requested credit amount.
- **Credit-related information:** Applicant seniority, housing status, employment duration and previous credit records.
- **Target variable:** Applicant credit status, indicating whether the applicant repaid or defaulted.

Unknown target records were excluded from model training. Invalid financial values represented by placeholder values were converted to missing values for appropriate preprocessing.

## Data preparation and feature engineering

Data preparation focused on improving data quality and ensuring that the model could process both numerical and categorical attributes.

Key steps included:

- Removing records with unknown target labels.
- Converting invalid financial placeholder values into missing values.
- Handling missing numerical values using median imputation.
- Encoding categorical variables using `DictVectorizer`.
- Preparing consistent training, validation and test datasets.
- Applying stratified cross-validation to preserve class proportions during model evaluation.

## Modelling

I experimented with multiple classification algorithms, including:

- Logistic Regression
- Decision Trees
- Random Forest
- XGBoost

XGBoost was selected as the final model based on its performance during evaluation.

The model was assessed using ROC-AUC, precision, recall, F1-score, average precision and confusion matrices.

I also explored decision-threshold optimisation instead of relying entirely on the default 0.5 cutoff.

A threshold of 0.34 was selected using validation data to determine how predicted default probabilities are converted into binary classifications.

## Results

The selected XGBoost model achieved a held-out test ROC-AUC of approximately **0.8332**.

The evaluation also considered the trade-off between precision and recall, since false-positive and false-negative predictions have different implications in credit risk assessment.

## Model explainability

An important component of CreditLens is model explainability.

I incorporated SHAP (SHapley Additive exPlanations) to investigate how individual input features influence model predictions.

This provides a way to examine:

- Which features contribute most to the model's predictions.
- How individual applicant characteristics influence predicted default probabilities.
- Why two applicants with different characteristics may receive different risk estimates.

SHAP explanations describe model behaviour and should not be interpreted as proof of causal relationships.

## Model deployment

After training, I integrated the selected model into a Flask REST API.

The application includes:

- A `POST /predict` endpoint for generating credit default predictions.
- A `GET /ping` endpoint for checking API availability.
- Model persistence for loading the trained XGBoost artifact.
- Probability-based predictions using the selected classification threshold.
- Automated API tests using pytest.
- Docker containerisation for consistent application execution.

The API returns the estimated default probability, the decision threshold and the resulting classification.

## Limitations & what I'd do next

There are several areas where the project could be extended:

- Evaluate model calibration to determine how closely predicted probabilities correspond to observed default rates.
- Investigate fairness across different applicant groups.
- Explore additional hyperparameter optimisation.
- Introduce monitoring for changes in applicant data and model performance.
- Expand the API to support batch predictions and richer prediction explanations.

This project is intended for educational and demonstration purposes. Its predictions should not be used as the sole basis for real lending decisions.

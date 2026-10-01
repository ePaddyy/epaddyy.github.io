---
title: Customer Churn Prediction
summary: Classifying which telecom customers will churn (7,000+ customers, imbalanced classes). Compares Decision Tree, Random Forest and XGBoost with SMOTE oversampling; the current Random Forest baseline reaches 78% test accuracy.
category: ml
icon: users
order: 3
status: in-progress
metric:
  name: Churn recall
  value: '0.59'
tags: [Python, scikit-learn, XGBoost, SMOTE]
approach: Encoded categorical features, rebalanced the training set with SMOTE and compared tree-based models with 5-fold cross-validation. Next come stratified CV, hyperparameter tuning, threshold tuning for churn recall, and serving the model behind a small API.
impact: Recall on churners matters more than overall accuracy, because a missed churner is a lost customer. The work focuses on improving that number.
---

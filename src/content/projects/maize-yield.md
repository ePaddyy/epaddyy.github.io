---
title: Ghana Maize Yield Prediction
summary: An end-to-end pipeline predicting district-level maize yields in Ghana. It combines yield records with growing-season weather from the NASA POWER API, soil types and policy/pest indicators, then trains a Random Forest + Gradient Boosting ensemble.
category: ml
icon: line-chart
order: 1
featured: true
showOnHome: true
metric:
  name: R²
  value: '0.95'
  note: random 80/20 split
tags: [Python, scikit-learn, Pandas, NASA POWER API, Ensembles]
repo: https://github.com/ePaddyy/ghana-maize-yield-prediction
approach: Standardised district names to merge yield, weather and soil sources; aggregated daily NASA weather into April–August growing-season features; added a previous-year yield lag, pest-outbreak and Planting for Food and Jobs policy indicators; trained a voting ensemble inside a scikit-learn pipeline.
impact: District-level yield forecasts can support planning by farmers, agencies and food-security programmes in Ghana.
publishedAt: 2025-12-09
caseStudy:
  headline: Predicting district-level maize yields in Ghana
  facts:
    - { label: Role, value: 'Solo: data, modelling, evaluation' }
    - { label: Model, value: Random Forest + Gradient Boosting voting ensemble }
    - { label: Data, value: '1,681 district-year yield records (2010–2016) + NASA POWER weather' }
    - { label: Stack, value: 'Python, Pandas, scikit-learn, geopy, NASA POWER API, joblib' }
  results:
    - { value: '0.95', label: R² on a random held-out 20% split }
    - { value: '10', label: Input features }
---

## The problem

Maize is one of Ghana's most important staple crops, and yields vary sharply between districts and seasons. Agencies and farmers plan inputs, storage and food-security interventions with little forward-looking information. The goal was a model that estimates a district's yield for a season from conditions that can be observed in advance.

## Data

The project joins three sources. The first is district-level maize yield records for 2010–2016. The second is daily weather for each district from the [NASA POWER](https://power.larc.nasa.gov/) agro-climatology API: rainfall, temperature, humidity, solar radiation and topsoil moisture. The third is dominant soil type, mapped from each district's region.

- District names were inconsistent across sources ("Municipal", "Metro", bracketed suffixes, hyphens), so I wrote a normaliser to make the joins reliable.
- Each district was geocoded with geopy, and the coordinates were used to query NASA POWER for 2010–2021.
- Daily weather was aggregated over the April–August growing season: total rainfall, plus mean temperature, humidity, sunlight and soil moisture.

## Feature engineering

- **Previous-year yield** (lag-1) per district, the strongest single signal of local productivity.
- **Pest-outbreak indicator** for the 2016–2017 seasons.
- **Policy indicator** for the Planting for Food and Jobs programme (2017 onward).
- **Outlier capping**: yields above 4 t/ha were winsorised to limit the influence of reporting errors.
- Soil type is one-hot encoded inside a scikit-learn `ColumnTransformer`, so preprocessing travels with the model.

## Modelling

I trained a voting ensemble of a Random Forest and a Gradient Boosting regressor (200 trees each). Averaging the two balances the low variance of bagging against the low bias of boosting. Preprocessing and model live in a single `Pipeline`, saved with joblib, so the same object can be loaded by an app or API without re-implementing the feature logic.

## Limitations & what I'd do next

Being explicit about evaluation matters more to me than the headline number. The current R² comes from a random 80/20 split, and two choices in the pipeline make that score optimistic:

- District records for 2017–2021 were not available, so those years were filled with national average yields. The model can predict those rows almost perfectly, which inflates R².
- With a lag feature, a random split lets the model train on later seasons and test on earlier ones from the same district.
- **Next:** a time-based split (train on earlier seasons, test on the latest), a comparison against a naive "same as last year" baseline, real post-2016 district data, and SHAP feature attributions.
- **Then:** serve the saved pipeline in a small Streamlit app where a user picks a district and adjusts rainfall to see the predicted yield.

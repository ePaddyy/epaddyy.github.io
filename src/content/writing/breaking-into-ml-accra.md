---
title: Breaking into machine learning from Accra
description: The resources, projects and mindset shifts that helped me start a data career in Ghana, for anyone on a similar path.
publishedAt: 2026-10-01
tags: [Career]
draft: false
---

# Breaking into machine learning from Accra

*The resources, projects and mindset shifts that helped me start a data career in Ghana, for anyone on a similar path.*

When I first became interested in data science and machine learning, I knew I wanted to work with data, build models and eventually create systems that could solve real-world problems.

What I didn't know was where to start.

There were so many things to learn. Python, SQL, statistics, data analysis, machine learning algorithms, deep learning, deployment, cloud computing. Every time I came across something new, it felt like another prerequisite I needed to master before I could move forward.

And like many people trying to break into tech, I had questions.

What should I learn first? Which courses are actually worth the time? How do I move from following tutorials to building something myself? And perhaps the biggest question: how do I turn all this learning into an actual career?

I'm still figuring out some of these things, but looking back, there are a few experiences and lessons that have shaped my journey so far.

## Starting with what I knew

My academic background is in Statistics, with a minor in Computer Science at the University of Ghana.

Looking back, Statistics gave me a useful foundation. I was already familiar with concepts such as probability, distributions, hypothesis testing and statistical reasoning.

But understanding the mathematics behind something and implementing it in code are two different experiences.

I had to become comfortable with Python, learn how to manipulate datasets, understand how different libraries work and gradually connect statistical concepts to practical machine learning applications.

I started spending more time with Python, Pandas, NumPy and SQL. Eventually, I became interested in moving beyond data analysis into predictive modelling.

That was when machine learning started becoming more than just an interesting subject.

## Finding the right learning resources

One thing I learned early is that having access to resources isn't the same as knowing how to use them.

There are countless courses, tutorials, YouTube videos and documentation pages available online. It is easy to spend weeks collecting learning materials without making much progress.

A few experiences made a difference in my journey.

### DataBloom Africa

Participating in DataBloom Africa's first cohort was one of the important steps in my development.

It gave me an opportunity to learn in a more structured environment, engage with practical data science concepts and interact with other people interested in the field.

More importantly, it helped me see how the skills I was developing could be applied to actual problems.

### Machine Learning Zoomcamp

Another resource that has influenced my learning is the Machine Learning Zoomcamp.

I particularly appreciate its practical approach to machine learning.

Instead of only learning what an algorithm does, I get to work through the process of preparing data, training models, evaluating performance and eventually thinking about how those models can be deployed.

It has also helped me understand that building a machine learning application involves much more than calling `.fit()` and `.predict()`.

You have to understand your data, make decisions about features, evaluate your results and ensure that your model can work outside the notebook.

### Learning by reading and experimenting

Documentation has also become an important part of my learning process.

I am gradually becoming more comfortable reading documentation, investigating errors and understanding why a particular implementation works.

This is something I underestimated when I started.

You cannot rely on tutorials to cover every situation. At some point, you have to learn how to find answers yourself.

## Moving from tutorials to projects

For me, one of the biggest changes happened when I started building projects.

Following a tutorial can teach you how something works, but building independently forces you to make decisions.

What data should I use? How should I clean it? Which features are relevant? Which model should I try? How do I know whether my results are actually good?

These questions became much more interesting when I started working on projects.

Some of the projects I have worked on include:

### Ghana Maize Yield Prediction

I worked on a machine learning pipeline to predict district-level maize yields in Ghana.

The project brought together agricultural yield records, weather information from NASA POWER, soil characteristics and policy indicators.

It was particularly interesting because it connected machine learning to a problem that has practical relevance in Ghana.

### Customer Churn Prediction

This project introduced me to building classification models that estimate the likelihood of a telecommunications customer leaving a service.

I worked with customer information, categorical feature encoding, Logistic Regression and model evaluation.

I also took the project further by building an API and packaging the application with Docker.

### Credit Risk Prediction

Here, I explored how machine learning could be applied to credit risk assessment.

I experimented with different classification algorithms, eventually selecting XGBoost.

I also explored decision-threshold optimisation and SHAP explainability.

This project helped me appreciate that predicting a probability and making a classification decision are not necessarily the same thing.

### Electric Car Purchase Prediction

For this project, I compared several classification algorithms, including Logistic Regression, Random Forest, XGBoost, LightGBM and CatBoost.

I selected LightGBM for the final application and built a Flask API around the trained model.

It also gave me more experience with input validation, automated testing and Docker.

These projects are not perfect, and I don't consider them finished representations of everything I want to learn.

But each one has taught me something different.

More importantly, they have helped me move from simply knowing about machine learning algorithms to understanding the process of building applications around them.

## The mindset shifts that made a difference

There are a few things I wish I had understood earlier.

### 1. You don't need to learn everything before building something

When you're starting, it is tempting to think you need to master Python, mathematics, statistics, SQL and every machine learning algorithm before attempting a project.

You don't.

Learn the fundamentals, then start applying them. You will discover gaps in your knowledge along the way.

Sometimes building a project teaches you what you actually need to learn next.

### 2. A high model score doesn't automatically mean a good model

This is something I have come to appreciate through experience.

It is easy to get excited when a model achieves a high R² or ROC-AUC score.

But how was the data split? Is there data leakage? Are the features available at prediction time? Does the model generalise to unseen data?

I have learned that evaluating a model honestly is just as important as training it.

A model with a slightly lower score but a reliable evaluation process is more valuable than an impressive number that cannot be trusted.

### 3. Don't stop at the notebook

Initially, I thought building a machine learning project meant cleaning data, training a model and evaluating the results.

But what happens after training?

How do you save the model? How does another application use it? How do you validate incoming data? How do you test your prediction endpoint? How do you deploy the application?

These questions introduced me to Flask, APIs, Docker, pytest and model persistence.

I'm still learning these areas, but they have changed how I approach machine learning projects.

### 4. Build projects that mean something to you

You don't always need to build another house price prediction model or Titanic classifier.

Those projects can be useful for learning, but eventually, try working with problems that interest you.

For me, working on Ghanaian agricultural data made machine learning feel more relevant.

It made me think about how the skills I was developing could potentially contribute to problems beyond a classroom or tutorial.

### 5. Share your learning journey

Another thing I am learning is the importance of documenting what I do.

Not every post needs to announce a major achievement. Sometimes explaining a concept you struggled with, sharing a project or documenting how you solved an error can be useful to someone else.

It also gives you an opportunity to reflect on what you have learned.

You don't have to wait until you consider yourself an expert before contributing to the conversation.

## Building a data career in Ghana

Learning machine learning is one part of the journey. Finding opportunities to apply those skills is another.

In Ghana, there are people, organisations, communities and training programmes contributing to the growth of data science and AI.

My experience with DataBloom Africa has shown me the value of structured learning environments.

I also believe that connecting with other learners and practitioners is important. You get exposed to different perspectives, projects and opportunities that you might not encounter when learning alone.

I am still exploring the professional side of this journey, looking for opportunities to contribute, gain practical experience and work with people solving real problems using data.

One thing I have come to appreciate is that building a career takes more than collecting certificates.

You need to demonstrate what you can do.

Your projects, the problems you have solved, your ability to explain your decisions and your willingness to keep learning all contribute to that.

## What I would tell someone starting today

If you're in Ghana and interested in getting into data science or machine learning, I would suggest starting with a few things:

1. **Build your foundations.** Learn Python, SQL, statistics and data manipulation.
2. **Understand the fundamentals of machine learning.** Don't just memorise algorithms. Understand what they do and when to use them.
3. **Choose a structured learning resource.** Avoid jumping between too many courses.
4. **Build projects independently.** Start small, then gradually work on more complex problems.
5. **Learn how to evaluate your work.** Understand your metrics, validation strategies and model limitations.
6. **Learn to deploy your models.** Even a simple API can teach you a lot about the practical side of machine learning.
7. **Connect with people.** Find communities, share your work and learn from others.

You don't need to have everything figured out before you start.

## Still learning, still building

I wouldn't describe myself as someone who has figured out the machine learning career path.

I'm still learning, experimenting, making mistakes and discovering areas I need to improve.

There are still algorithms I want to understand better, projects I want to build and concepts I need to revisit.

But I think that's part of the process.

Coming from Accra, I want to continue developing skills that allow me to contribute to meaningful data and machine learning projects, both locally and beyond Ghana.

If there is one thing I would take away from my journey so far, it is this:

**Don't spend all your time preparing to become a machine learning practitioner. Start practising. Build something, break something, understand why it broke, and try again.**

You might be further along than you think.

And if you're on a similar journey, I'd be interested to hear what you're learning and what you're building.

We're all figuring something out.

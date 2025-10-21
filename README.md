# Attest Frontend technical stage

This is the base code for Attest's Frontend technical stage interview.

## Background

This code is not a direct representation of Attest's code or coding principles; it is designed to guide the technical stage interview. You are asked to familiarise yourself with the existing code - you can make notes on improvements you may make given you had the opportunity to do so.

You will be asked to do some technical tasks during the interview to add some new functionality of the mini-application. These will be shared during the interview, prior to the interview ensure that you have familarised yourself with the application, code and concepts.

## Description

Attest is a platform where users can design and send surveys to the public. The Attest platform will then collect responses from many users; your task is to represent the results of a completed survey and allow the user to filter the data.

The sidebar on the right displays and applies demographic filters, this is used to filter the response data, i.e. clicking "London" will change the responses shown on the left to only display the responses of users that match the filters selected.

## What's included?

- A vite config that supports:
  - `.(css|postcss)` files - see for included base plugins `.postcssrc.js`
  - `.(less)` files
  - `.(sass|scss)` files
  - `.(js|jsx)` files
  - `.(ts|tsx)` files
- [Vitest](https://vitest.dev/) is the provided library for unit tests.
  - We have included all the necessary packages and setup

## Tasks

We will run through tasks during the pairing interview. We provide the repository ahead of time to allow you to get familiar with some of the code base.

Prior to the pairing interview please:
- Setup the local repository
- Make sure everything is running
  - There is a failing unit test, as we will use this as a reference for the completed task being correct.
- Get familiar with some of the code, so we have a shared understanding
  - `./src/store.ts` contains the application state
  - `./src/filters/*` contains the UI and functionality for the demographic filter panel
  - `./src/survey/*` contains the UI for the survey
  - `./models/*` contains the data models/types that we will primarily be working with
    - You should have a reasonable understanding of the terminology of what a `demographic`, `respondent`, `question` and `answer` models are.
  - `./public/api/*` contains the mock data that powers the application

## Setup

You can use [`mise`](https://mise.jdx.dev/) to setup environment

`mise install`

## How to run?

- Open up the Dev Server on `https://localhost:5173` with `pnpm start`
- To retrieve the survey data request `http://localhost:5173/api/survey.json`
- To retrieve the demographics data request `http://localhost:5173/api/demographics.json`
- To retrieve the respondents data request `http://localhost:5173/api/respondents.json`
- Run unit tests `pnpm test` (these will only pass upon successfully completing task 3)
- Run type checking `pnpm typecheck`

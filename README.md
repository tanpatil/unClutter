Check out our Devpost submission-https://devpost.com/software/unclutter

## Inspiration
A properly formatted and typeset document benefits everyone. Nobody likes to look at messy handwritten math, whether that be the TA grading your homework, your friends asking for help, or even yourself when you're trying to go through notes. Over the past week, my teammates and I lost a couple of points on a Math test just because the TAs couldn't read out work and we don't want that to happen again😅.

## What it does
unClutter helps create more readable math. It takes a picture of the math document and converts it into a well-formatted and downloadable LaTeX document. It also spellchecks your document and fixes all your spelling mistakes.

## How we built it
In the backend, it uses OpenCV to extract blocks of math equations and text from uploaded documents and then calls the Mathpix API to get the equivalent Latex. We later assemble the various blocks into a single Latex document and we use Azure's Bing Spell Check API to correct any typos before feeding it in to generate a pdf. This is also sent to a pipeline that uploads the generated PDF to Azure blob storage and creates a cropped preview image of the PDF that is also stored in Azure.  The front-end and UI were created using React.

## Challenges we ran into
We all had little experience with OpenCV and were struggling at one point to properly extract math equations line by line so that Mathpix could properly identify the math in each line. We initially wanted to create a mobile app but had to pivot to making a web app to make it accessible to a larger audience.

## Accomplishments that we're proud of
Successfully created a web application with OpenCV and Clean UX design. Working on an unsolved machine learning problem (sentence simplification). Real-time text analysis to determine new elements and deploy a complex back-end pipeline using Azure

## What we learned
We learned how to use OpenCV to extract blocks of features, configure and use the many different offerings from Azure (Blob Storage, Bing Spell Check, VM, DNS)

## What's next for unClutter
Improving the accuracy of equation recognition
Support translation to multiple languages
Verifying the equity of math equations in the image
Increasing the efficiency of the processing pipeline
Find sources/websites with similar concepts in the document

![gallery](https://user-images.githubusercontent.com/89934290/142909923-96761f10-d053-40d5-bb1e-cb7df037445e.jpg)
![vlcsnap-2021-11-22-09h41m08s059](https://user-images.githubusercontent.com/89934290/142909926-181becc4-0ebf-4abd-ae6e-1f7734d77721.png)
![gallery (1)](https://user-images.githubusercontent.com/89934290/142909930-a324acb9-d8e6-4f36-9c97-5494c86cd135.jpg)

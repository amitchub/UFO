# UFO Sightings Module 11 Challenge

## Overview of the project analysis
The UFO sightings webpage is designed to show data of UFO sightings.  This is done via a filtered table.  The filtering can be performed on the following criteria:
- Date
- City
- State
- Country
- Shape

## Project Analysis Results:

To the left of the dynamic results table is a series of filter search boxes.  Each one of these fields support one the five aforementioned criteria:

<img src="https://github.com/amitchub/UFO/blob/main/Resources/filters.PNG">

Once data has been entered into a field and the 'Enter' button is pressed, the dynamic table will populate with any results that correspond to the criteria:

<img src="https://github.com/amitchub/UFO/blob/main/Resources/results_mi.PNG">

## Summary:

While this first stab at an interactive table is powerful and informative, it does have some drawbacks.
- There is no real enforcement of proper entries in the fields.  For instance, one could enter '13' in all of the fields.  Of course, the table would be empty in that case.
- The 'Comments' field of the table has some formatting errors for special characters.
- The 'Duration' field of the table is a string and not a numeric value.

Some suggestions for improvement include, but are not limited to, the following:
- Make the entry fields more 'intelligent', such that they enforce entry types.
- Create context-sensitive text instructions when hovering over input fields.
- Create a date range complex input field.

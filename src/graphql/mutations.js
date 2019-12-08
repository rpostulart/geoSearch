/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEvent = `mutation CreateEvent(
  $input: CreateEventInput!
  $condition: ModelEventConditionInput
) {
  createEvent(input: $input, condition: $condition) {
    date
    description
    maxParticipants
    polygon {
      type
      coordinates
    }
  }
}
`;
export const updateEvent = `mutation UpdateEvent(
  $input: UpdateEventInput!
  $condition: ModelEventConditionInput
) {
  updateEvent(input: $input, condition: $condition) {
    date
    description
    maxParticipants
    polygon {
      type
      coordinates
    }
  }
}
`;
export const deleteEvent = `mutation DeleteEvent(
  $input: DeleteEventInput!
  $condition: ModelEventConditionInput
) {
  deleteEvent(input: $input, condition: $condition) {
    date
    description
    maxParticipants
    polygon {
      type
      coordinates
    }
  }
}
`;
export const createRunner = `mutation CreateRunner(
  $input: CreateRunnerInput!
  $condition: ModelRunnerConditionInput
) {
  createRunner(input: $input, condition: $condition) {
    name
    age
    coordinates {
      lat
      lon
    }
  }
}
`;
export const updateRunner = `mutation UpdateRunner(
  $input: UpdateRunnerInput!
  $condition: ModelRunnerConditionInput
) {
  updateRunner(input: $input, condition: $condition) {
    name
    age
    coordinates {
      lat
      lon
    }
  }
}
`;
export const deleteRunner = `mutation DeleteRunner(
  $input: DeleteRunnerInput!
  $condition: ModelRunnerConditionInput
) {
  deleteRunner(input: $input, condition: $condition) {
    name
    age
    coordinates {
      lat
      lon
    }
  }
}
`;

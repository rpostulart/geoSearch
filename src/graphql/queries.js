/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const nearbyEvent = `query NearbyEvent($location: LocationEventInput!) {
  nearbyEvent(location: $location) {
    items {
      date
      description
      maxParticipants
      polygon {
        type
        coordinates
      }
    }
    total
    nextToken
  }
}
`;
export const searchByDistance = `query SearchByDistance($location: LocationRunnerInput!, $km: Int) {
  searchByDistance(location: $location, km: $km) {
    items {
      name
      age
      coordinates {
        lat
        lon
      }
    }
    total
    nextToken
  }
}
`;
export const getEvent = `query GetEvent($id: ID!) {
  getEvent(id: $id) {
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
export const listEvents = `query ListEvents(
  $filter: ModelEventFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      date
      description
      maxParticipants
      polygon {
        type
        coordinates
      }
    }
    nextToken
  }
}
`;
export const getRunner = `query GetRunner($id: ID!) {
  getRunner(id: $id) {
    name
    age
    coordinates {
      lat
      lon
    }
  }
}
`;
export const listRunners = `query ListRunners(
  $filter: ModelRunnerFilterInput
  $limit: Int
  $nextToken: String
) {
  listRunners(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      name
      age
      coordinates {
        lat
        lon
      }
    }
    nextToken
  }
}
`;
export const searchEvents = `query SearchEvents(
  $filter: SearchableEventFilterInput
  $sort: SearchableEventSortInput
  $limit: Int
  $nextToken: String
) {
  searchEvents(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      date
      description
      maxParticipants
      polygon {
        type
        coordinates
      }
    }
    nextToken
    total
  }
}
`;
export const searchRunners = `query SearchRunners(
  $filter: SearchableRunnerFilterInput
  $sort: SearchableRunnerSortInput
  $limit: Int
  $nextToken: String
) {
  searchRunners(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      name
      age
      coordinates {
        lat
        lon
      }
    }
    nextToken
    total
  }
}
`;

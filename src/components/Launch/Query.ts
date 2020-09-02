import gql from 'graphql-tag';

const LAUNCH_QUERY = gql`
query launches {
    launches {
      flight_number
      mission_name
      launch_year
      launch_success
    }
  }`;

module.exports(LAUNCH_QUERY)
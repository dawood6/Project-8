import gql from 'graphql-tag';

const LAUNCH_D_QUERY = gql`
query launchInfo($id: String) {
    launch(id: $id) {
     flight_number
     mission_name
     launch_year
     launch_success
     details
     launch_site {
       site_name
     }
     rocket {
       rocket_name
       rocket_type
     }
     links {
       video_link
       flickr_images
     }
   }
 }`;

module.exports(LAUNCH_D_QUERY)
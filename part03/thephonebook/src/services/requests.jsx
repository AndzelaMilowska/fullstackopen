import axios from "axios";
const baseUrl = '/api/persons'

const getAll = () => {
return axios.get(baseUrl).then((response) => {
    console.log('Fetched data successfully:', response.data);
    return response.data;
  }).catch(error => {
      console.error('Error fetching data:', error);
    });
};

const create = (newObject) => {
  return axios.post(baseUrl, newObject).then((response) => {
    return response.data;
  }).catch(error => {
      console.error('Error creating data:', error);
      throw error;
    });

};

const deleteContact = (id) => {
  return axios.delete(`${baseUrl}/${id}`).then((response) => {
    console.log('Deleted data successfully:', response.data);
    return response.data;
  }).catch(error => {
      console.error('Error deleting data:', error);
      return '404';
    });
}

const updateContact = (contact) => {
    return axios.put(`${baseUrl}/${contact.id}`, contact).then((response) => {
      return response.data;
    }).catch(error => {
        console.error('Error updating data:', error);
      });   
}
export default { getAll, create, deleteContact, updateContact};

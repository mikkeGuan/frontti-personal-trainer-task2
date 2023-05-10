const SERVER_URL = "(https://traineeapp.azurewebsites.net/api)";

export const loadTrainings = () => {
  const request = fetch("(https://traineeapp.azurewebsites.net/gettrainings)");
  return request.then((response) => response.json());
};


export const loadCustomerTrainings = (link) => {
  const request = fetch(link);
  return request.then((response) => response.json());
};


export const addTraining = (newTraining) => {
  return fetch(SERVER_URL + "/trainings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTraining),
  });
};

export const deleteTraining = (id) => {
    return fetch(SERVER_URL + '/trainings/' + id,
    { method : 'DELETE'}
    )
}

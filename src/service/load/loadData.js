//load all customers
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_API_URL;

const readAll = async (path) => {
  try {
    const response = await axios.get(`${BASE_URL}${path}`);
    if (response.status == 200) {
      const data = response.data;
      return {
        data: data.data,
        error: false,
        message: "data loaded successfully",
      };
    }
    return {
      error: true,
      message: "sorry something happened",
      data: [],
    };
  } catch (error) {
    return {
      error: true,
      message: "Please check your network",
      data: [],
    };
  }
};

const createData = async (data, path, cancelToken) => {
  try {
    const response = await axios.post(path, data, {
      baseURL: BASE_URL,
      cancelToken,
      headers: {
        "Content-Type": "multipart/form-data", // Set content type to multipart form data
      },
    });

    console.log(data);
    if (response.data.code == 201) {
      const data = response.data;
      return {
        data: data.data,
        error: false,
        message: "Data created successfully",
      };
    }
    return {
      error: true,
      message: "Could not create data",
      data: [],
    };
  } catch (error) {
    return {
      error: true,
      message: "Please check your network",
      data: [],
    };
  }
};

const updateById = async ({ id, ...data }, path, cancelToken) => {
  try {
    const response = await axios.put(`${path}/${id}`, data, {
      baseURL: BASE_URL,
      cancelToken,
      headers: {
        "Content-Type": "multipart/form-data", // Set content type to multipart form data
      },
    });
    if (response.status == 200) {
      console.log(response.data);
      return {
        error: false,
        message: "Data updated successfully",
      };
    }
    return {
      error: true,
      message: "Sorry something happened",
      data: [],
    };
  } catch (error) {
    return {
      error: true,
      message: "Please check your network",
      data: [],
    };
  }
};

const login = async (data) => {
  try {
    const response = await axios.post("/login", data, {
      baseURL: BASE_URL,
    });
    console.log(response.data)
    if (response.status == 200) {
      return {
        error: false,
        data: response.data,
      };
    }
    return {
      error: true,
      message: "login failed",
    };
  } catch (error) {
    return {
      error: true,
      message: "check your network"
    }
  }
};

export { createData, login, readAll, updateById };

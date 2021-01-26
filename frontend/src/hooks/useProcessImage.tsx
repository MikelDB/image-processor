import { useState, useEffect } from "react";

const useProcessImage = async () => {
  const response = await fetch('https://0.0.0.0/image', { method: 'POST'})

  return response;
};

export default useProcessImage;

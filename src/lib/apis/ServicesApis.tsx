import { freelanceServices } from "../dummy_data/dummyData";

export const getAllServices = () => {
  return freelanceServices;
};

export const getServiceByName = (serviceName: string) => {
  const foundService = freelanceServices.find(
    (service: any) => service.service === serviceName
  );

  if (!foundService) {
    throw new Error("Service not found");
  }

  return foundService;
};

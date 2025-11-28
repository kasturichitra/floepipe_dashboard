export const ApirequestHandler = async (
  api,
  setLoading,
  onSuccess,
  onError
) => {
  if (setLoading) {
    setLoading(true);
  }
  try {
    const response = await api();
    const { data } = response;
    console.log('RequestHandler and response Data ===>', data);

    if (data?.success) {
      onSuccess(data || []);
    } else {
      throw new Error(data?.message || "Unknown error occurred");
    }

  } catch (error) {
    console.log(error);
    console.error(error?.response);
    if ((error?.response?.data?.statusCode === 404) && (error?.response?.data?.message === 'Session Expired')) {
      sessionStorage.removeItem('token');
      localStorage.clear();
      sessionStorage.clear();
    //   document.body.className = "sidebar-closed"
      window.location.href = "/";
    }
    const errorMessage = error?.response?.data?.message || error?.message || "Something went wrong";
    onError(errorMessage);
  } finally {
    if (setLoading) setLoading(false);
  }
};
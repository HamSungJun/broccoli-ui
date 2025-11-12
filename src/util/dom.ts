export const getScrollHeight = (element?: HTMLElement | null) => {
  return element ? element.scrollHeight : 0;
};

export const getClientHeight = (element?: HTMLElement | null) => {
  return element ? element.clientHeight : 0;
};

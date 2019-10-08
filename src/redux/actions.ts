export const CHANGE_STATUS = 'CHANGE_STATUS';

export function changeStatus(id: number, status: string) {
  return {
    type: CHANGE_STATUS,
    id,
    status,
  };
}

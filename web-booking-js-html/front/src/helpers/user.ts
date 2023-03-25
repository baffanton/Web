export const getUserId = (): string | null => {
    return sessionStorage.getItem('userId');
}

export const setUserId = (newValue: string) => {
    sessionStorage.setItem('userId', newValue);
}
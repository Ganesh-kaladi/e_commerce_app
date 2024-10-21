export const getCategoriesFromApi = async () => {

    const res = await fetch('https://api.escuelajs.co/api/v1/categories');
    const category = await res.json();
    return category;
}
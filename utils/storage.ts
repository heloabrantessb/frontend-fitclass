import AsyncStorage from "@react-native-async-storage/async-storage";

export async function login(token: string, userData: any) {
    await AsyncStorage.setItem('authtoken', token);
    await AsyncStorage.setItem('userData', JSON.stringify(userData));
}

export async function logout(){
    await AsyncStorage.removeItem('authtoken');
    await AsyncStorage.removeItem('userData');
}

export async function verifyLogin(): Promise<boolean> {
    try {
    const token = await AsyncStorage.getItem('authtoken');
    return !!token;
    } catch (error) {
        console.error("Erro ao verificar Login:", error);
        return false;
    }
}

export async function getToken(): Promise<string | null> {
    try{
        return await AsyncStorage.getItem('authtoken');
    }catch(error){
        console.error("Erro ao obter token:", error);
        return null;
    }
}

export async function getUserData(): Promise<any | null> {
    try{
        const userData = await AsyncStorage.getItem('userData');
        return userData ? JSON.parse(userData) : null;
    }catch(error){
        console.error("Erro ao obter dados do usuário:", error);
        return null;
    }
}

export async function getUserId(): Promise<number | null> {
    try{
        const userData = await getUserData();
        return userData ? userData.id : null;
    }catch(error){
        console.error("Erro ao obter ID do usuário:", error);
        return null;
    }
}

export async function getUserName(): Promise<string | null> {
    try{
        const userData = await getUserData();
        return userData ? userData.name : null;
    }catch(error){
        console.error("Erro ao obter nome do usuário:", error);
        return null;
    }
}
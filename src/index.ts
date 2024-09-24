import axios, { AxiosError } from 'axios';

interface Pet {
    id: string;
    category?: {
        id: string;
        name: string;
    };
    name: string;
    photoUrls: string[];
    tags?: {
        id: string;
        name: string;
    }[];
    status?: string;
    [key: string]: any;
}

async function fetchPetsByStatus(status: string): Promise<void> {
    try {
        const response = await axios.get<Pet[]>(
            'https://petstore3.swagger.io/api/v3/pet/findByStatus',
            {
                params: { status },
            }
        );
        // Форматированный вывод данных
        console.log('Полученные данные:', JSON.stringify(response.data, null, 2));
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError: AxiosError = error;
            console.error('Ошибка Axios:', axiosError.message);
            if (axiosError.response) {
                console.error('Статус ответа:', axiosError.response.status);
                console.error('Данные ответа:', JSON.stringify(axiosError.response.data, null, 2));
            } else if (axiosError.request) {
                console.error('Запрос не получил ответа:', axiosError.request);
            }
        } else {
            console.error('Неизвестная ошибка:', error);
        }
    }
}

fetchPetsByStatus('available');

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { HeroStats } from "./HeroStats";
import useHerosummary from "../hooks/useHerosummary";
import type { SumaryInformationResponse } from "../types/summary-information.response";


// implementacion fictisia de nuestro useHerosummary
vi.mock('../hooks/useHerosummary');
const mockUserHeroSummary = vi.mocked(useHerosummary);


// creamos la data que nos trae la respuesta del heroSummary
const mockSummaryData = {
    "totalHeroes": 25,
    "strongestHero": {
        "id": "1",
        "name": "Clark Kent",
        "slug": "clark-kent",
        "alias": "Superman",
        "powers": [
            "Súper fuerza",
            "Vuelo",
            "Visión de calor",
            "Visión de rayos X",
            "Invulnerabilidad",
            "Súper velocidad"
        ],
        "description": "El Último Hijo de Krypton, protector de la Tierra y símbolo de esperanza para toda la humanidad.",
        "strength": 10,
        "intelligence": 8,
        "speed": 9,
        "durability": 10,
        "team": "Liga de la Justicia",
        "image": "1.jpeg",
        "firstAppearance": "1938",
        "status": "Active",
        "category": "Hero",
        "universe": "DC"
    },
    "smartestHero": {
        "id": "2",
        "name": "Bruce Wayne",
        "slug": "bruce-wayne",
        "alias": "Batman",
        "powers": [
            "Artes marciales",
            "Habilidades de detective",
            "Tecnología avanzada",
            "Sigilo",
            "Genio táctico"
        ],
        "description": "El Caballero Oscuro de Ciudad Gótica, que utiliza el miedo como arma contra el crimen y la corrupción.",
        "strength": 6,
        "intelligence": 10,
        "speed": 6,
        "durability": 7,
        "team": "Liga de la Justicia",
        "image": "2.jpeg",
        "firstAppearance": "1939",
        "status": "Active",
        "category": "Hero",
        "universe": "DC"
    },
    "heroCount": 18,
    "villainCount": 7
}



const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
        }
    }
})

const renderHEroStart = (mockData?: Partial<SumaryInformationResponse>) => {

    if (mockData) {
        mockUserHeroSummary.mockReturnValue({
            data: mockData,
        } as unknown as ReturnType<typeof useHerosummary>)

    } else {
        mockUserHeroSummary.mockReturnValue({
            data: undefined,
        } as unknown as ReturnType<typeof useHerosummary>)

    }



    return render(
        <QueryClientProvider client={queryClient}>
            <HeroStats />
        </QueryClientProvider>
    )
}

describe('HeroStats', () => {

    test('should return component with default value', () => {
        const { container } = renderHEroStart();
        // console.log(screen.debug())
        expect(screen.getByText('Loadin...')).toBeDefined();
        expect(container).toMatchSnapshot();




    });

    test('should render heroStast with the mock information ', () => {
        const {container} = renderHEroStart(mockSummaryData);
        // screen.debug()

        expect(container).toMatchSnapshot();
        expect(screen.getByText('Total Characters')).toBeDefined()
        expect(screen.getByText('favoritos')).toBeDefined()
        expect(screen.getByText('Fuerte')).toBeDefined()


    })

})
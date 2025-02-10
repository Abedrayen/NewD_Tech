'use client';

import { ProductsStat } from '@/components/components/ProductStat';
import { Separator } from "@/components/ui/separator";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { CategoryChart } from "@/components/charts/categoriesChart"
import {ProductTab} from "@/components/components/ProductTab"

const chartData = [
    { month: "January", AssetManagement: 100000, Immobilier: 70000, Forets: 50000, PrivateEquity: 30000 },
    { month: "February", AssetManagement: 120000, Immobilier: 80000, Forets: 60000, PrivateEquity: 40000 },
    { month: "March", AssetManagement: 110000, Immobilier: 75000, Forets: 55000, PrivateEquity: 35000 },
    { month: "April", AssetManagement: 90000, Immobilier: 60000, Forets: 40000, PrivateEquity: 25000 },
];

export default function Products() {
    return (
        <div className="flex flex-col mb-28 justify-center items-center px-12 space-y-10">
            {/* Overall Stats */}
            <div className="p-4 max-w-fit space-x-5 flex flex-row justify-center items-center rounded-lg shadow-lg bg-white mt-6">
                <ProductsStat title="Total des Produits" value="80" />
                <Separator className="bg-customGrey h-16 hidden md:block" orientation="vertical" />
                <ProductsStat title="Le Produits le plus vendus" value="Asset Management" />
                <Separator className="bg-customGrey h-16 hidden md:block" orientation="vertical" />
                <ProductsStat title="Le Categorie le plus utilisé" value="Immobilier" />
            </div>

            {/* Chart Section */}

            <div className="w-full p-8 bg-white shadow rounded-lg">
                <h2 className="text-xl font-bold text-customBlue mb-6">
                    Gains pour les 4 dernier mois
                </h2>
                <BarChart
                    width={800}
                    height={400}
                    data={chartData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="AssetManagement" fill="#2563eb" name="Asset Management" />
                    <Bar dataKey="Immobilier" fill="#34d399" name="Immobilier" />
                    <Bar dataKey="Forets" fill="#fbbf24" name="Forets" />
                    <Bar dataKey="PrivateEquity" fill="#ef4444" name="Private Equity" />
                </BarChart>

            </div>

            <ProductTab />
            

      </div>
  
    );
}

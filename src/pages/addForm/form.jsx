import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react";
import { Label } from "@/components/ui/label"
import { User, CreditCard, Shirt, Rocket, Salad, CircleHelp, CircleCheck } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
  SelectGroup
} from "@/components/ui/select"

export const FormTransaction = () => {
  const [name, setName] = useState("entrer");

  return (
    <div>
      <form className="grid lg:grid-cols-2 m-7 gap-4 " action="">
        <div className="flex gap-28">
          <Button className="bg-zinc-50 text-black" onClick={() => setName('entrer')}>Entrée</Button>
          <Button className="bg-zinc-300 text-black " onClick={() => setName('sortie')}>Sortie</Button>
        </div>


        <Label name="montant">Montant :</Label>
        <Input type="number" name="montant" id="montant" />
        <Label name="category">Sélectionnez une catégorie :</Label>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Catégories" />
          </SelectTrigger>
          <SelectContent >
            <SelectGroup>
              <SelectItem value="virement" className="flex flex-row gap-x-2"> <User className="w-4 h-4" /> Virement</SelectItem>
              <SelectItem value="retrait"> <CreditCard />Retrait d'argent</SelectItem>
              <SelectItem value="vetements"> <Shirt />Vêtements</SelectItem>
              <SelectItem value="loisirs"> <Rocket />Loisirs</SelectItem>
              <SelectItem value="alimentaire"> <Salad />Alimentaire</SelectItem>
              <SelectItem value="autres"> <CircleHelp />Autres</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Label name="date">Selectionnez une date :</Label>
        <Input type="date" name="date" id="date" />
        <Label name="lieu">Sélectionnez un lieu :</Label>
        <Input type="text" name="lieu" id="lieu" />
        <Button type="submit" className="bg-transparent text-black shadow-none">Ajouter une transaction <CircleCheck /></Button>
      </form>
    </div>
  );
};
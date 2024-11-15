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
import * as functions from "@/functions/functions.js"

export const FormTransaction = () => {

  const [name, setName] = useState("");
  const [rising, setRising] = useState(0);
  const [date, setDate] = useState(new Date());
  const [place, setPlace] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("entrée");
  console.log(name, rising, date, place, category, type);

  return (
    <div>
      <form className=" m-7 gap-4" action="">
        <div className="flex gap-28">
          <Button type="button" className={type === "entrée" ? "bg-zinc-50 text-black" : "bg-zinc-300 text-black"} onClick={() => setType('entrée')}>Entrée</Button>
          <Button type="button" className={type === "sortie" ? "bg-zinc-50 text-black" : "bg-zinc-300 text-black"} onClick={() => setType('sortie')}>Sortie</Button>
        </div>

        <Label name="titre">Titre :</Label>
        <Input type="text" name="titre" id="titre" onChange={(e) => setName(e.target.value)} />
        <Label name="montant">Montant :</Label>
        <Input type="number" name="montant" id="montant" onChange={(e) => setRising(parseFloat(e.target.value) || 0)} />
        <Label name="category">Sélectionnez une catégorie :</Label>
        <Select onValueChange={(value) => setCategory(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Catégories" />
          </SelectTrigger>
          <SelectContent >
            <SelectGroup>
              <SelectItem value="virement"><span className="flex gap-2 items-center"><User className="size-6" /> Virement</span></SelectItem>
              <SelectItem value="retrait"> <span className="flex gap-2 items-center"><CreditCard className="size-6" /> Retrait d'argent</span></SelectItem>
              <SelectItem value="vetements"> <span className="flex gap-2 items-center"><Shirt className="size-6" /> Vêtements</span></SelectItem>
              <SelectItem value="loisirs"><span className="flex gap-2 items-center"><Rocket className="size-6" /> Loisirs</span></SelectItem>
              <SelectItem value="alimentaire"><span className="flex gap-2 items-center"><Salad className="size-6" /> Alimentaire</span></SelectItem>
              <SelectItem value="autres"> <span className="flex gap-2 items-center"><CircleHelp className="size-6" /> Autres</span></SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Label name="date">Selectionnez une date :</Label>
        <Input type="date" name="date" id="date" onChange={(e) => setDate(e.target.value)} />
        <Label name="lieu">Sélectionnez un lieu :</Label>
        <Input type="text" name="lieu" id="lieu" onChange={(e) => setPlace(e.target.value)} />
        <Button type="submit" className="bg-transparent text-black shadow-none" onClick={() => functions.addTrade(name, rising, date, place, category, type)}
        >Ajouter une transaction <CircleCheck /></Button>
      </form>
    </div>
  );
};
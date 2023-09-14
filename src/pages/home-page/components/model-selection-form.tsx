import { Wand2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectItem,
  SelectValue,
  SelectTrigger,
  SelectContent,
} from "@/components/ui/select";

export function ModelSelectionForm() {
  return (
    <form action="" className="space-y-6">
      <div className="space-y-2">
        <Label>Prompt</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Selecione um prompt..." />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="title">Título do YouTube</SelectItem>
            <SelectItem value="description">Descrição do YouTube</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Modelo</Label>
        <Select defaultValue="gpt3.5" disabled>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="gpt3.5">GPT 3.5-turbo 16k</SelectItem>
          </SelectContent>
        </Select>

        <span className="block text-xs">
          Você poderá customizar essa opção em breve
        </span>
      </div>

      <Separator />

      <div className="space-y-2">
        <Label>Temperatura</Label>
        <Slider min={0} max={1} step={0.1} />

        <span className="block text-xs">
          Valores mais altos tendem a deixar o resultado mais criativo e com
          possíveis erros
        </span>
      </div>

      <Separator />

      <Button className="gap-2 w-full" type="submit">
        Executar
        <Wand2 className="w-4 h-4" />
      </Button>
    </form>
  );
}

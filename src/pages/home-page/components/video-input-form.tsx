import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { FileVideo, Upload } from "lucide-react";

export function VideoInputForm() {
  return (
    <form action="" className="space-y-6">
      <label
        htmlFor="video"
        className="border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5"
      >
        <FileVideo className="w-4 h-4" />
        Selecione um vídeo
      </label>

      <input type="file" id="video" accept="video/mp4" className="sr-only" />

      <Separator />

      <div className="space-y-2">
        <Label htmlFor="transcription_prompt">Prompt de transcrição</Label>

        <Textarea
          id="transcription_prompt"
          className="h-20 leading-relaxed"
          placeholder="inclua palavras chaves mencionadas no vídeo separadas por (,)"
        />
      </div>

      <Button type="submit" className="gap-2 w-full">
        Carregar vídeo
        <Upload className="w-5-h-4" />
      </Button>
    </form>
  );
}

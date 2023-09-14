import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { VideoInputForm } from "./components/video-input-form";
import { ModelSelectionForm } from "./components/model-selection-form";

export function HomePage() {
  return (
    <>
      <div className="flex flex-col flex-1 gap-4">
        <div className="grid grid-rows-2 gap-4 flex-1">
          <Textarea
            className="resize-none p-4 leading-relaxed"
            placeholder="Inclua o prompt para a IA..."
          />

          <Textarea
            readOnly
            className="resize-none p-4 leading-relaxed"
            placeholder="Resultado gerado pela IA..."
          />
        </div>

        <p className="text-xs">
          Lembre-se: você pode utilizar a variável{" "}
          <code className="text-violet-400">{"{transcription}"}</code> no seu
          prompt para adicionar o conteúdo da transcrição do vídeo selecionado
        </p>
      </div>

      <aside className="max-w-xs w-full space-y-6">
        <VideoInputForm />

        <Separator />

        <ModelSelectionForm />
      </aside>
    </>
  );
}

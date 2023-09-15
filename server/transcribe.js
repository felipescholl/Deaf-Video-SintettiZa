import { pipeline } from "@xenova/transformers"

import { transcriptionExample } from "./utils/transcription.js"

export async function transcribe(audio) {
  //return transcriptionExample

  try {
    console.log("Transcrevendo audio...")
    const transcribe = await pipeline(
      "automatic-speech-recognition", 
      "Xenova/whisper-small"
    )

    const transcription = await transcribe(audio, {
      chunk_length_s: 30,
      stride_length_s: 5,
      language: "portuguese",
      task: "transcribe",

    })

    console.log("Audio transcrevido com sucesso")
    return transcription?.text.replace("[Música]", "")
  }  catch (error) {
      throw new Error("Erro ao transcrever audio: " + error)
    }
  }


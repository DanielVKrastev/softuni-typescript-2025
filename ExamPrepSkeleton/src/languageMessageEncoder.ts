import { Cipher } from "./contracts/cipher";
import { PartialMessageEncoder } from "./contracts/implemented/partialMessageEncoder";
import { Language } from "./contracts/language";
import { MessageEncoder } from "./contracts/messageEncoder";
import { ProccessedCharsType } from "./types";

export class LanguageMessageEncoder<TLanguage extends Language, TCipher extends Cipher<TLanguage>> extends PartialMessageEncoder implements MessageEncoder{
    private encodedCount = 0;
    private decodedCount = 0;

    constructor(language: TLanguage, cipher: TCipher) {
        super(language, cipher);
    }

    public encodeMessage(secretMessage: unknown) {
        if(typeof secretMessage !== 'string' || secretMessage.length === 0) {
            return "No message.";
        }

        const strippedMessage = this.stripForbiddenSymbols(secretMessage);
        const isCompatible = this.language.isCompatibleToCharset(strippedMessage);

        if(!isCompatible) {
            return "Message not compatible.";
        }

        const encodedMessage = this.cipher.encipher(strippedMessage);
        this.encodedCount += encodedMessage.length;
        return encodedMessage;
    }

    public decodeMessage(secretMessage: unknown): string {
        if(typeof secretMessage !== 'string' || secretMessage.length === 0) {
            return "No message.";
        }

        const isCompatible = this.language.isCompatibleToCharset(secretMessage);

        if(!isCompatible) {
            return "Message not compatible.";
        }

        const decodedMessage = this.cipher.decipher(secretMessage);
        this.decodedCount += decodedMessage.length;
        return decodedMessage;
    }

    public totalProcessedCharacters(type: ProccessedCharsType ): string {
        
    }

}

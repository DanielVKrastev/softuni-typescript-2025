import { Cipher } from "./contracts/cipher";
import { PartialMessageEncoder } from "./contracts/implemented/partialMessageEncoder";
import { Language } from "./contracts/language";
import { MessageEncoder } from "./contracts/messageEncoder";

export class LanguageMessageEncoder<TLanguage extends Language, TCipher extends Cipher<TLanguage>> extends PartialMessageEncoder implements MessageEncoder{
    private encodedCount = 0;
    private decodedCount = 0;

    constructor(language: TLanguage, cipher: TCipher) {
        super(language, cipher);
    }
}

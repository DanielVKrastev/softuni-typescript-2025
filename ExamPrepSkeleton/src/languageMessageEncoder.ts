import { Cipher } from "./contracts/cipher";
import { PartialMessageEncoder } from "./contracts/implemented/partialMessageEncoder";
import { Language } from "./contracts/language";
import { MessageEncoder } from "./contracts/messageEncoder";

export class LanguageMessageEncoder<TLanguage extends Language, TCipher extends Cipher<TLanguage>> extends PartialMessageEncoder implements MessageEncoder{
    // constructor must work with languange and cipher
}

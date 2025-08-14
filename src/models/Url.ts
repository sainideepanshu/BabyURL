import mongoose, { Document, Schema} from 'mongoose';

// we have extended the Document class so that our IUrl interface can also have the properties and methods of a Mongoose Document along with our custom properties.
export interface IUrl extends Document {
    originalUrl: string;
    shortUrl: string;
    clicks: number;
    createdAt: Date;
    updatedAt: Date;
}


const urlSchema = new Schema<IUrl>({
    originalUrl: { type: String, required: true },
    shortUrl: { type: String, required: true, unique: true, index: true },   // unique index for shortUrl to prevent duplicates
    clicks: { type: Number, default: 0 }
}, { timestamps: true });

urlSchema.index({ createdAt: -1});

export const Url = mongoose.model<IUrl>('Url', urlSchema);
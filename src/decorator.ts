import { httpHandler } from "./http.handler";
import {HttpHandlerOptions} from './interfaces';

export const HttpHandlerDecorator = <R>(
  options: HttpHandlerOptions<R>,
): MethodDecorator => (
  target: Object,
  key: string | Symbol,
  descriptor: PropertyDescriptor,
) => {
  const originalValue = descriptor.value;

  descriptor.value = httpHandler({
    ...options,
    handler: originalValue,
  });
};

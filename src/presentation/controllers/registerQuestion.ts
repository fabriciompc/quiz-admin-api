import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingParamError } from './../errors/missing-param-error'

export class RegisterQuestionController {
  handle(httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.question) {
      return { statusCode: 400, body: new MissingParamError('question') }
    }
    if (!httpRequest.body.answers) {
      return { statusCode: 400, body: new MissingParamError('answers') }
    }
    const response = {} as HttpResponse
    return response
  }
}

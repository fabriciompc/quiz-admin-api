import { badRequest } from '../helpers/http-helper'
import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingParamError } from './../errors/missing-param-error'

export class RegisterQuestionController {
  handle(httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.question) {
      return badRequest(new MissingParamError('question'))
    }
    if (!httpRequest.body.answers) {
      return badRequest(new MissingParamError('answers'))
    }
    const response: HttpResponse = { statusCode: 200, body: {} }
    return response
  }
}

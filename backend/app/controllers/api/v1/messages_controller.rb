class Api::V1::MessagesController < ApplicationController
  def index
    messages = Message.all()
    render json:messages, status:200
  end

  def new
    message = Message.new
  end

  def create
    message = Message.new(
      recipient_phone_number: message_params[:recipient_phone_number], 
      body: message_params[:body])

    if message.save
      render json:message, statue:200
    else
      render json: {error: "Failed sending message"}
    end
  end

  def message_params
    params.require(:message).permit(:recipient_phone_number, :body)
  end
end

class RecognizerController < ApplicationController
  def index
  end

  def app
  end

  def submit
    @pixels = params[:pixels]
    @prediction = `python3 recognizer_ml_model/char_recognizer.py #{@pixels}`
    @prediction = @prediction[-2]
    p @prediction
    render 'index'
  end
end

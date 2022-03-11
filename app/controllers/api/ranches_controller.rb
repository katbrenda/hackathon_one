class Api::RanchesController < ApplicationController
# PRETENT THIS WAS JUST DONE AS WELLL. BY SALLY
before_action :set_ranch, only: [:update, :show, :destroy]

def index
  render json: Ranch.all
end

def show
    render json: @ranch
end

def create
  ranch = Ranch.new(ranch_params)
  if(ranch.save)
    render json: ranch
  else
    render json: {error:ranch.errors.full_messages}, status: 422
  end
end

def update
    if(@ranch.update(ranch_params))
        render json: @ranch
    else
        render json: {error:@ranch.errors.full_messages}, status: 422
    end
end

def destroy
    render json: @ranch.destroy
end

private

def set_ranch
    @ranch = Ranch.find(params[:id])
end

def ranch_params
  params.require(:ranch).permit(:name)
end

end

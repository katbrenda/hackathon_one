class Api::AnimalsController < ApplicationController
  before_action :set_ranch, except: [:animals_all]
    before_action :set_animal, only:[:show, :update, :destroy]
    # give me all treaments of specific bug
    # get 'api/bugs/:bug_id/treatments''
    # let res = await axios.get('/api/bugs/1/treatments')
    def index
        render json: @ranch.animals
    end

    def animals_all
        render json: Animal.all
    end

    # get on treatment of specific bug
    # get 'api/bugs/:bug_id/treatments/:id''
    # let res = await axios.get('/api/bugs/2/treatments/1')
    def show
        render json: @animal
    end

    def create
      animal = @ranch.animals.new(animal_params)
      if(animal.save)
        render json: animal
      else
        render json: {errors: animal.errors.full_messages}, status: 422
      end
    end

   
    def update
        if(@animal.update(animal_params))
          render json: @animal
        else
          render json: {errors: @animal.errors.full_messages}, status: 422
        end
    end

    def destroy
        render json: @animal.destroy
    end

    private 
    def set_ranch
        @ranch = Ranch.find(params[:ranch_id])
    end

    def set_animal
        @animal = @ranch.animals.find(params[:id])
    end

    def animal_params
      params.require(:animal).permit(:kind, :price)
    end
end
